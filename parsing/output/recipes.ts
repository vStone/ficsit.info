import { Recipe, EntityKind } from '@local/schema';

import { AssetDatabase, EntityDatabase, OutputDatabase, WithoutSlug } from '../state';

import { mapItemAmount, expandReferences } from './_util';

type BuiltRecipe = WithoutSlug<Recipe>;
type RawInfo = EntityDatabase.Info<'FGRecipe'>;

export async function fillRecipes(outputDb: OutputDatabase, entityDb: EntityDatabase, assetDb: AssetDatabase) {
  for (const raw of entityDb.findByClass('FGRecipe')) {
    const recipe = await _buildRecipe(outputDb, entityDb, assetDb, raw);
    if (!recipe) continue;

    outputDb.register(recipe, [raw.entity.ClassName], 'recipe-');
  }
}

async function _buildRecipe(outputDb: OutputDatabase, entityDb: EntityDatabase, assetDb: AssetDatabase, raw: RawInfo): Promise<BuiltRecipe | undefined> {
  const recipe = {
    kind: EntityKind.Recipe,
    name: raw.entity.mDisplayName,
    ingredients: raw.entity.mIngredients.map(a => mapItemAmount(outputDb, a)),
    products: raw.entity.mProduct.map(a => mapItemAmount(outputDb, a)),
    producedIn: expandReferences(outputDb, entityDb, raw.entity.mProducedIn),
    duration: raw.entity.mManufactoringDuration,
    manualMultiplier: raw.entity.mManualManufacturingMultiplier,
  } as const;

  const firstProduct = entityDb.getOrDie(raw.entity.mProduct[0].ItemClass!.path);
  // TODO: support vehicles
  if (entityDb.isKind<any>(firstProduct, 'FGVehicleDescriptor')) return;

  const icon = await assetDb.findLargestEntityIcon(firstProduct);
  if (icon) {
    const [small] = await assetDb.saveIcon(icon, [64]);

    _assign(recipe, 'icon', small);
  }

  return recipe;
}

function _assign<TTarget extends object, TKey extends keyof BuiltRecipe, TValue extends BuiltRecipe[TKey]>(
  target: TTarget, key: TKey, value: TValue
): asserts target is TTarget & Record<TKey, TValue> {
  (target as any)[key] = value;
}
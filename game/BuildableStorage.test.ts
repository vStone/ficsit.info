import { BuildableStorageSchema } from './BuildableStorage';

describe(`schema.BuildableStorage`, () => {
  it(`parses Build_StoragePlayer_C from v114480`, () => {
    const result = BuildableStorageSchema.parse({
      ClassName: "Build_StoragePlayer_C",
      mStackingHeight: "0.000000",
      mInventorySizeX: "5",
      mInventorySizeY: "5",
      mPowerConsumption: "0.000000",
      mPowerConsumptionExponent: "1.600000",
      mOnHasPowerChanged: "()",
      mOnHasProductionChanged: "()",
      mMinimumProducingTime: "2.000000",
      mMinimumStoppedTime: "5.000000",
      mNumCyclesForProductivity: "20",
      mCanChangePotential: "False",
      mMinPotential: "0.010000",
      mMaxPotential: "1.000000",
      mMaxPotentialIncreasePerCrystal: "0.500000",
      mFluidStackSizeDefault: "SS_FLUID",
      mFluidStackSizeMultiplier: "1",
      OnReplicationDetailActorCreatedEvent: "()",
      mSignificanceBias: "0.000000",
      mEffectUpdateInterval: "0.000000",
      mAddToSignificanceManager: "False",
      mSignificanceRange: "18000.000000",
      mDisplayName: "Personal Storage Box",
      mDescription: "Contains 25 slots for storing large amounts of items.",
      MaxRenderDistance: "-1.000000",
      mHighlightVector: "(X=0.000000,Y=0.000000,Z=0.000000)",
      mMaterialNameToInstanceManager: "()",
      mSkipBuildEffect: "False",
      mBuildEffectSpeed: "0.000000",
      mForceNetUpdateOnRegisterPlayer: "False",
      mShouldShowHighlight: "False",
      mAllowCleranceSeparationEvenIfStackedOn: "False",
      mInteractingPlayers: "",
      mIsUseable: "True",
    });

    expect(result).toStrictEqual({
      ClassName: "Build_StoragePlayer_C",
      mStackingHeight: 0.0,
      mInventorySizeX: 5,
      mInventorySizeY: 5,
      mPowerConsumption: 0.0,
      mPowerConsumptionExponent: 1.6,
      mMinimumProducingTime: 2.0,
      mMinimumStoppedTime: 5.0,
      mNumCyclesForProductivity: 20,
      mCanChangePotential: false,
      mMinPotential: 0.01,
      mMaxPotential: 1.0,
      mMaxPotentialIncreasePerCrystal: 0.5,
      mSignificanceBias: 0.0,
      mEffectUpdateInterval: 0.0,
      mAddToSignificanceManager: false,
      mSignificanceRange: 18000.0,
      mDisplayName: "Personal Storage Box",
      mDescription: "Contains 25 slots for storing large amounts of items.",
      MaxRenderDistance: -1.0,
      mHighlightVector: { X: 0.0, Y: 0.0, Z: 0.0 },
      mSkipBuildEffect: false,
      mBuildEffectSpeed: 0.0,
      mForceNetUpdateOnRegisterPlayer: false,
      mShouldShowHighlight: false,
      mAllowCleranceSeparationEvenIfStackedOn: false,
      mIsUseable: true,
    });
  });
});

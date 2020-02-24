import { BuildableDockingStationSchema } from './BuildableDockingStation';

describe(`schema.BuildableDockingStation`, () => {
  it(`parses Build_TruckStation_C from v114480`, () => {
    const result = BuildableDockingStationSchema.parse({
      ClassName: "Build_TruckStation_C",
      mMapText: "",
      mStorageSizeX: "8",
      mStorageSizeY: "6",
      mTransferSpeed: "0.500000",
      mFuelTransferSpeed: "5.000000",
      mStackTransferSize: "1.000000",
      mPowerConsumption: "20.000000",
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
      mAddToSignificanceManager: "True",
      mSignificanceRange: "18000.000000",
      mDisplayName: "Truck Station",
      mDescription: "Either send or recieve resources to vehicles. Has an inventory with 48 slots.\r\nTransfers up to 120 stacks per minute to/from docked vehicle. \r\nAlways refuels vehicles if it has access to a matching fuel type..\r\n",
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
      ClassName: "Build_TruckStation_C",
      mAddToSignificanceManager: true,
      mAllowCleranceSeparationEvenIfStackedOn: false,
      MaxRenderDistance: -1.0,
      mBuildEffectSpeed: 0.0,
      mCanChangePotential: false,
      mDescription: "Either send or recieve resources to vehicles. Has an inventory with 48 slots.\nTransfers up to 120 stacks per minute to/from docked vehicle. \nAlways refuels vehicles if it has access to a matching fuel type..\n",
      mDisplayName: "Truck Station",
      mEffectUpdateInterval: 0.0,
      mForceNetUpdateOnRegisterPlayer: false,
      mFuelTransferSpeed: 5.0,
      mHighlightVector: { X: 0.0, Y: 0.0, Z: 0.0 },
      mIsUseable: true,
      mMapText: "",
      mMaxPotential: 1.0,
      mMaxPotentialIncreasePerCrystal: 0.5,
      mMinimumProducingTime: 2.0,
      mMinimumStoppedTime: 5.0,
      mMinPotential: 0.01,
      mNumCyclesForProductivity: 20,
      mPowerConsumption: 20.0,
      mPowerConsumptionExponent: 1.6,
      mShouldShowHighlight: false,
      mSignificanceBias: 0.0,
      mSignificanceRange: 18000.0,
      mSkipBuildEffect: false,
      mStackTransferSize: 1.0,
      mStorageSizeX: 8,
      mStorageSizeY: 6,
      mTransferSpeed: 0.5,
    });
  });
});

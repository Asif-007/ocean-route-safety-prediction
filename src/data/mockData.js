export const oceanMockData = [
  { Depthm: 0, T_degC: 10.5, Salnty: 33.44, O2ml_L: 2.71, WaterCondition: 1, DensityIndex: 23.55, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 8, T_degC: 10.46, Salnty: 33.44, O2ml_L: 2.71, WaterCondition: 1, DensityIndex: 23.48, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 500, T_degC: 6.2, Salnty: 34.1, O2ml_L: 1.8, WaterCondition: 0, DensityIndex: 25.42, VisibilityRisk: 1, SafeRoute: 0 },
  { Depthm: 1000, T_degC: 3.5, Salnty: 34.5, O2ml_L: 1.2, WaterCondition: 0, DensityIndex: 26.55, VisibilityRisk: 0, SafeRoute: 0 },
  { Depthm: 200, T_degC: 14.3, Salnty: 33.8, O2ml_L: 4.5, WaterCondition: 1, DensityIndex: 23.19, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 120, T_degC: 16.1, Salnty: 33.2, O2ml_L: 5.1, WaterCondition: 1, DensityIndex: 21.73, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 3200, T_degC: 1.8, Salnty: 37.2, O2ml_L: 1.6, WaterCondition: 0, DensityIndex: 29.11, VisibilityRisk: 0, SafeRoute: 0 },
  { Depthm: 2800, T_degC: 2.4, Salnty: 36.6, O2ml_L: 2.2, WaterCondition: 0, DensityIndex: 28.56, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 65, T_degC: 22.2, Salnty: 34.0, O2ml_L: 4.2, WaterCondition: 1, DensityIndex: 20.54, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 1500, T_degC: 4.1, Salnty: 35.3, O2ml_L: 1.9, WaterCondition: 0, DensityIndex: 27.01, VisibilityRisk: 0, SafeRoute: 0 },
  { Depthm: 230, T_degC: 19.5, Salnty: 33.7, O2ml_L: 3.7, WaterCondition: 1, DensityIndex: 21.11, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 420, T_degC: 11.8, Salnty: 34.2, O2ml_L: 2.6, WaterCondition: 1, DensityIndex: 23.84, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 3600, T_degC: 0.9, Salnty: 37.8, O2ml_L: 1.1, WaterCondition: 0, DensityIndex: 29.94, VisibilityRisk: 0, SafeRoute: 0 },
  { Depthm: 40, T_degC: 25.8, Salnty: 33.1, O2ml_L: 3.4, WaterCondition: 1, DensityIndex: 18.78, VisibilityRisk: 1, SafeRoute: 0 },
  { Depthm: 980, T_degC: 7.4, Salnty: 34.8, O2ml_L: 2.4, WaterCondition: 1, DensityIndex: 25.62, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 2700, T_degC: 2.1, Salnty: 36.9, O2ml_L: 2.1, WaterCondition: 0, DensityIndex: 28.89, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 3050, T_degC: 1.7, Salnty: 37.1, O2ml_L: 1.9, WaterCondition: 0, DensityIndex: 29.17, VisibilityRisk: 0, SafeRoute: 0 },
  { Depthm: 760, T_degC: 8.9, Salnty: 34.6, O2ml_L: 2.8, WaterCondition: 1, DensityIndex: 24.99, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 180, T_degC: 13.6, Salnty: 33.9, O2ml_L: 4.0, WaterCondition: 1, DensityIndex: 22.99, VisibilityRisk: 1, SafeRoute: 1 },
  { Depthm: 1320, T_degC: 5.2, Salnty: 35.0, O2ml_L: 2.0, WaterCondition: 0, DensityIndex: 26.44, VisibilityRisk: 1, SafeRoute: 0 }
];

export const withLabels = oceanMockData.map((row) => ({
  ...row,
  WaterConditionLabel: row.WaterCondition === 1 ? 'Stable' : 'Unstable',
  VisibilityRiskLabel: row.VisibilityRisk === 1 ? 'Low' : 'High',
  SafetyLabel: row.SafeRoute === 1 ? 'Safe' : 'Unsafe'
}));


// Refined gradients/colors
export const DEFAULT_COLORS = [
  'from-[#9b87f5]/60 to-[#8B5CF6]/30',
  'from-[#F97316]/40 to-[#33C3F0]/26',
  'from-[#FFE29F]/50 to-[#9b87f5]/31',
  'from-[#8fd3f4]/40 to-[#a1c4fd]/30',
  'from-[#E5DEFF]/60 to-[#FEC6A1]/31',
  'from-[#D3E4FD]/31 to-[#9b87f5]/14',
  'from-[#F97316]/31 to-[#8B5CF6]/17',
];

export const PARTICLE_SHAPES = ['circle', 'oval', 'polygon'] as const;
export const ANIM_TYPES = ['float', 'circle', 'drift', 'wave'] as const;

// Helper function
export const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

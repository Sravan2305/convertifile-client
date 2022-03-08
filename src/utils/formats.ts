export const formats: {
  [key: string]: {
    icon?: string;
    allowed: string[];
    count?: number | null;
  };
} = {
  PDF: {
    icon: '',
    allowed: ['PDF', 'JPG', 'PNG', 'JPEG'],
  },
  JPG: {
    icon: '',
    allowed: ['PDF', 'JPG', 'PNG', 'JPEG', 'TXT'],
  },
  PNG: {
    icon: '',
    allowed: ['PDF', 'JPG', 'PNG', 'JPEG', 'TXT'],
  },
  JPEG: {
    icon: '',
    allowed: ['PDF', 'JPG', 'PNG', 'JPEG', 'TXT'],
  },
  'MULTIPLE-IMAGES': {
    icon: '',
    allowed: ['PDF'],
    count: 10,
  },
};

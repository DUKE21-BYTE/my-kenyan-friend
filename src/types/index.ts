export interface County {
  id: number;
  name: string;
  region: string;
  description: string;
  attractions: string[];
  image: string;
}

export interface GuideApplication {
  fullName: string;
  email: string;
  whatsapp: string;
  county: string;
  experience: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

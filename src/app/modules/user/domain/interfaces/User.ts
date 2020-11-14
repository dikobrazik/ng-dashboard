export interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  role: 'Manager' | 'CEO' | 'Developer' | 'Engineer' | 'Designer';
  forecast: number;
  lastActivityDate: string;
}

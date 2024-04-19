export interface Message {
  id: string;
  type: 'inbound' | 'outbound';
  content: string;
  date: number;
}

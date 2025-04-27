type TicketStatus = 'ACTIVE' | 'INACTIVE' | 'PROGRESS';

export type TicketType = {
  id: string;
  name: string;
  content: string | null;
  status: TicketStatus;
};

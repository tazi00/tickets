type TicketStatus = 'ACTIVE' | 'INACTIVE' | 'PROGRESS';

type TicketType = {
  id: string;
  name: string;
  content: string | null;
  status: TicketStatus;
};

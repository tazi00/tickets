type TicketStatus = 'ACTIVE' | 'INACTIVE' | 'PROGRESS';

type TicketType = {
  id: string;
  name: string;
  content: string;
  status: TicketStatus;
  price: number;
};

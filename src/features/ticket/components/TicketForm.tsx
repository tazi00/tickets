import Form from 'next/form';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { createTicket } from '../actions/createTicket';
import { updateTicket } from '../actions/updateTicket';

type TicketFormType = {
  mode?: 'Edit' | 'Create';
  ticket?: { id: string; title: string; content: string };
};

function TicketForm({
  mode = 'Create',
  ticket = { id: '', title: '', content: '' },
}: TicketFormType) {
  return (
    <Form
      action={mode === 'Create' ? createTicket : updateTicket.bind(null, ticket.id)}
      className="space-y-6"
    >
      {/* <input name="id" type="hidden" defaultValue={ticket.id} /> */}
      <Label className="flex flex-col gap-4 items-start">
        Title
        <Input placeholder="e.g. ticket-abc" name="title" defaultValue={ticket.title} />
      </Label>
      <Label className="flex flex-col gap-4 items-start">
        Content
        <Textarea placeholder="e.g. content-abc" name="content" defaultValue={ticket.content} />
      </Label>
      <Button className="w-full cursor-pointer" variant="secondary" type="submit">
        {mode === 'Create' ? 'Create' : 'Update'}
      </Button>
    </Form>
  );
}

export default TicketForm;

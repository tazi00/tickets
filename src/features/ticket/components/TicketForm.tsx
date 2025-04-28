'use client';

import Form from 'next/form';
import React, { useActionState } from 'react';

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
  const [formState, action] = useActionState(
    mode === 'Create' ? createTicket : updateTicket.bind(null, ticket.id),
    {
      message: '',
    },
  );

  return (
    <Form action={action} className="space-y-6">
      <Label className="flex flex-col gap-3 items-start">
        Title
        <Input
          placeholder="e.g. ticket-abc"
          name="title"
          defaultValue={(formState?.payload?.get('title') as string) ?? ticket.title}
        />
        <span className="text-xs text-red-400">{formState?.fieldErrors?.title?.[0]}</span>
      </Label>

      <Label className="flex flex-col gap-3 items-start">
        Content
        <Textarea
          placeholder="e.g. content-abc"
          name="content"
          defaultValue={(formState?.payload?.get('content') as string) ?? ticket.content}
        />
        <span className="text-xs text-red-400">{formState?.fieldErrors?.content?.[0]}</span>
      </Label>
      <Button className="w-full cursor-pointer" variant="secondary" type="submit">
        {mode === 'Create' ? 'Create' : 'Update'}
      </Button>

      {formState?.message}
    </Form>
  );
}

export default TicketForm;

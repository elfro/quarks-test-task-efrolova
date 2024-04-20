import { describe, expect, it } from 'vitest';
import { groupMessagesByDate } from '@/helpers/messages.helper.ts';
import { Message } from '@/types/message.type.ts';

describe('groupMessagesByDate', () => {
  it('should return something', () => {
    const mockMessages: Message[] = [];
    const res = groupMessagesByDate(mockMessages);

    expect(res).toEqual({});
  });
});

import { describe, expect, it } from 'vitest';

import { sortAndGroupMessagesByDate, sortMessagesByDate } from '@/helpers/messages.helper';
import { Message } from '@/types/message.type';

const content = 'Lorem ipsum';
describe('sortMessagesByDate', () => {
  it('should return an empty array for the empty array of messages', () => {
    const mockMessages: Message[] = [];
    const result = sortMessagesByDate(mockMessages);

    expect(result).toEqual([]);
  });

  it('should return the array of messages in ASCENDING order by default when OrderBy is not specified', () => {
    const mockFirstDate = '2024-04-21';
    const mockSecondDate = '2024-04-20';

    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(`${mockFirstDate}T10:30:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'inbound',
        date: new Date(`${mockSecondDate}T10:30:00`).getTime(),
        content,
      },
    ];
    const result = sortMessagesByDate(mockMessages);

    expect(result).toEqual([mockMessages[1], mockMessages[0]]);
  });

  it('should return the array of messages in ascending order when the difference is in year', () => {
    const mockFirstDate = '2024-04-21';
    const mockSecondDate = '2024-04-20';

    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(`${mockFirstDate}T10:30:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'inbound',
        date: new Date(`${mockSecondDate}T10:30:00`).getTime(),
        content,
      },
    ];
    const result = sortMessagesByDate(mockMessages, 'ASC');

    expect(result).toEqual([mockMessages[1], mockMessages[0]]);
  });

  it('should return the array of messages in ascending order when the difference is in milliseconds', () => {
    const mockFirstDate = new Date(2024, 4, 20, 20, 0, 0, 1);
    const mockSecondDate = new Date(2024, 4, 20, 20, 0, 0, 0);
    const mockThirdDate = new Date(2024, 4, 20, 20, 0, 0, 22);

    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(mockFirstDate).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'inbound',
        date: new Date(mockSecondDate).getTime(),
        content,
      },
      {
        id: 'mock_id_3',
        type: 'outbound',
        date: new Date(mockThirdDate).getTime(),
        content,
      },
    ];
    const result = sortMessagesByDate(mockMessages, 'ASC');

    expect(result).toEqual([mockMessages[1], mockMessages[0], mockMessages[2]]);
  });

  it('should return the same array of messages for the messages from the same date', () => {
    const mockDate = '2024-04-20T10:30:00';

    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(mockDate).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'inbound',
        date: new Date(mockDate).getTime(),
        content,
      },
    ];
    const result = sortMessagesByDate(mockMessages);

    expect(result).toEqual(mockMessages);
  });

  it('should return the array of messages in descending order when the difference is in year', () => {
    const mockFirstDate = '2024-04-01';
    const mockSecondDate = '2024-03-31';

    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(`${mockFirstDate}T10:30:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'inbound',
        date: new Date(`${mockSecondDate}T10:30:00`).getTime(),
        content,
      },
    ];
    const result = sortMessagesByDate(mockMessages, 'DESC');

    expect(result).toEqual([mockMessages[0], mockMessages[1]]);
  });

  it('should return the array of messages in descending order when the difference is in milliseconds', () => {
    const mockFirstDate = new Date(2024, 4, 20, 20, 0, 0, 1);
    const mockSecondDate = new Date(2024, 4, 20, 20, 0, 0, 0);
    const mockThirdDate = new Date(2024, 4, 20, 20, 0, 0, 22);

    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(mockFirstDate).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'inbound',
        date: new Date(mockSecondDate).getTime(),
        content,
      },
      {
        id: 'mock_id_3',
        type: 'outbound',
        date: new Date(mockThirdDate).getTime(),
        content,
      },
    ];
    const result = sortMessagesByDate(mockMessages, 'DESC');

    expect(result).toEqual([mockMessages[2], mockMessages[0], mockMessages[1]]);
  });
});

describe('groupMessagesByDate', () => {
  it('should return an empty object for the empty messages array', () => {
    const mockMessages: Message[] = [];
    const result = sortAndGroupMessagesByDate(mockMessages);

    expect(result).toEqual({});
  });

  it('should return one group of messages for one message', () => {
    const mockDate = '2024-04-20';
    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(`${mockDate}T10:30:00`).getTime(),
        content,
      },
    ];
    const result = sortAndGroupMessagesByDate(mockMessages);

    expect(result).toEqual({ [mockDate]: mockMessages });
  });

  it('should return one group of messages for multiple messages from the same date', () => {
    const mockDate = '2024-04-20';
    const mockMessages: Message[] = [
      {
        id: 'mock_id_1',
        type: 'inbound',
        date: new Date(`${mockDate}T10:30:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_2',
        type: 'outbound',
        date: new Date(`${mockDate}T10:35:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_3',
        type: 'outbound',
        date: new Date(`${mockDate}T11:15:00`).getTime(),
        content,
      },
    ];
    const result = sortAndGroupMessagesByDate(mockMessages);

    expect(result).toEqual({ [mockDate]: mockMessages });
  });

  it('should return two sorted group of messages for unsorted multiple messages by dates', () => {
    const mockFirstDate = '2024-04-20';
    const mockSecondDate = '2023-10-02';
    const mockMessagesFirstDate: Message[] = [
      {
        id: 'mock_id_1_1',
        type: 'inbound',
        date: new Date(`${mockFirstDate}T10:30:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_1_2',
        type: 'outbound',
        date: new Date(`${mockFirstDate}T10:35:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_1_3',
        type: 'outbound',
        date: new Date(`${mockFirstDate}T11:15:00`).getTime(),
        content,
      },
    ];
    const mockMessagesSecondDate: Message[] = [
      {
        id: 'mock_id_2_1',
        type: 'outbound',
        date: new Date(`${mockSecondDate}T10:30:00`).getTime(),
        content,
      },
      {
        id: 'mock_id_2_2',
        type: 'outbound',
        date: new Date(`${mockSecondDate}T10:35:00`).getTime(),
        content,
      },
    ];
    const result = sortAndGroupMessagesByDate([
      ...mockMessagesFirstDate,
      ...mockMessagesSecondDate,
    ]);

    expect(result).toEqual({
      [mockFirstDate]: mockMessagesFirstDate,
      [mockSecondDate]: mockMessagesSecondDate,
    });
  });
});

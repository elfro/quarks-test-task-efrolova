import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

const scrollIntoViewMock = vitest.fn();

Element.prototype.scrollIntoView = scrollIntoViewMock;

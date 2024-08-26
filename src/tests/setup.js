import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

let BASE_URL = null;
afterEach(() => {
  // Cleaning the component and setting up the
  if (!BASE_URL) BASE_URL = window.location.origin;

  delete window.location;
  window.location = new URL(BASE_URL);
  cleanup();
});
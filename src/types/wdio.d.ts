/**
 * WebdriverIO global types
 */
import type { ChainablePromiseElement } from 'webdriverio';

declare global {
  const driver: WebdriverIO.Browser;
  function $<T extends HTMLElement = HTMLElement>(
    selector: string
  ): ChainablePromiseElement<Promise<WebdriverIO.Element<T>>>;
  function $$<T extends HTMLElement = HTMLElement>(
    selector: string
  ): Promise<WebdriverIO.Element<T>[]>;
}

export {};

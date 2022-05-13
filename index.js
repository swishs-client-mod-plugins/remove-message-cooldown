/* The source code below is licensed under MIT */

import Plugin from '@structures/plugin';

import { getByProps } from '@webpack';
import { create } from '@modules/patcher';

const Patcher = create('remove-message-cooldown');

const Queue = getByProps('defaultRetryAfter');

export default class RemoveMessageCooldown extends Plugin {
  start() {
    Patcher.instead(Queue, 'isFull', () => false);
  }

  stop() {
    Patcher.unpatchAll();
  }
}

import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'

export type Type = {
  blockType: 'media-block'
}

export const MediaBlock: Block = {
  slug: 'MediaBlock',
  fields: [
    blockFields({
      name: 'mediaFields',
      fields: [
        {
          name: 'position',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Wide',
              value: 'wide',
            },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'richText',
          admin: {
            elements: ['link'],
          },
        },
      ],
    }),
  ],
}

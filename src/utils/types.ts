import TextBlock from '@/components/blocks/TextBlock.vue'
import DividerBlock from '@/components/blocks/DividerBlock.vue'
import HeadingBlock from '@/components/blocks/HeadingBlock.vue'
import OrderedListBlock from '@/components/blocks/OrderedListBlock.vue'
import QuoteBlock from '@/components/blocks/QuoteBlock.vue'
import UnorderedListBlock from '@/components/blocks/UnorderedListBlock.vue'


export interface Block {
  id: string,
  type: BlockType;
  details: Details;
}

export enum BlockType {
  Text = 'TEXT',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  Divider = 'DIVIDER',
  Quote = 'QUOTE',
  UnorderedList = 'UNORDERED_LIST',
}

export interface Details {
  value?: string;
}

export const BlockComponents = {
  [BlockType.Text]: TextBlock,
  [BlockType.H1]: HeadingBlock,
  [BlockType.H2]: HeadingBlock,
  [BlockType.H3]: HeadingBlock,
  [BlockType.Divider]: DividerBlock,
  [BlockType.OrderedList]: OrderedListBlock,
  [BlockType.Quote]: QuoteBlock,
  [BlockType.UnorderedList]: UnorderedListBlock,
}

export const textBlockMap = [BlockType.Text, BlockType.Quote, BlockType.OrderedList]

export const isTextBlock = (type: string) => {
  return textBlockMap.some(textBlock => textBlock === type)
}
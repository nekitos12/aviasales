import * as TicketsActionCreators from './tickets'
import * as TransferFilterActionCreators from './transfer'
import * as PriceFilterActionCreators from './price'

export default {
  ...TicketsActionCreators,
  ...TransferFilterActionCreators,
  ...PriceFilterActionCreators,
}

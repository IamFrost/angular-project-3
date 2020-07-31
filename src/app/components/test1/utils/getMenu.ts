export function getMenu() {
  let map = new Map();
  map.set('ADMIN', ['Create User', 'User Access']);
  map.set('ACCOUNTS', ['Accounting Head Entry', 'Buyer Ledger',
    'Contra Voucher Entry', 'General Ledger', 'Item Ledger', 'Ledger Book',
    'Open Balance for Buyer', 'Open Balance for Supplier', 'Receive Payment',
    'Supplier Ledger', 'Vocher Entry']);
  map.set('SALE', ['Buyer', 'Buyer List', 'MR Search', 'Sale Entry',
    'Sale Product Search', 'Buyer Ledger', 'Sale Return Entry']);
  map.set('INVENTORY', ['Card Entry', 'Damage Adjust', 'Item Entry',
    'Item Search', 'Opening Balance', 'Opening Quantity', 'Stock Position',
    'Unit Entry']);
  map.set('RECEIVED GOODS', ['Purchase Chalan', 'Purchase Edit', 'Purchase Entry',
    'Purchase Product Search Details', 'Supplier Info Entry']);
    return map;
}

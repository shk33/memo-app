var MemoItem = function (memoItem) {
  this.id = memoItem.id ||  "Memo_" + (new  Date()).getTime();
  this.title  = memoItem.title  ||  "";
  this.desc = memoItem.desc ||  "";
  this.type = memoItem.type ||  "voice";
  this.location = memoItem.location ||  "";
  this.mtime  = memoItem.mtime  ||  "";
};
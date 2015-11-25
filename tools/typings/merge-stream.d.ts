declare module 'merge-stream' {
  function mergeStream(...streams: NodeJS.ReadWriteStream[]): NodeJS.ReadWriteStream;
  module mergeStream {}
  export = mergeStream;
}

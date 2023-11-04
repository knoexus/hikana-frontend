const KanaWordBase = ({
  kanaSymbolArr,
  endHighlightingAtIndex = -1,
}: {
  kanaSymbolArr: string[];
  endHighlightingAtIndex?: number;
}) => (
  <div className="mt-6">
    {kanaSymbolArr.map((char, idx) => (
      <span
        key={idx}
        className={`${
          idx <= endHighlightingAtIndex && 'text-green-500'
        } text-2xl font-medium`}
      >
        {char}
      </span>
    ))}
  </div>
);

export default KanaWordBase;

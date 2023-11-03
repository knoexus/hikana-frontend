const KanaWordBase = ({
  kanaSymbolArr,
  endHighlightingAtIndex = -1,
}: {
  kanaSymbolArr: string[];
  endHighlightingAtIndex?: number;
}) => (
  <div>
    {kanaSymbolArr.map((char, idx) => (
      <span
        key={idx}
        className={`${idx <= endHighlightingAtIndex && 'text-green-500'}`}
      >
        {char}
      </span>
    ))}
  </div>
);

export default KanaWordBase;

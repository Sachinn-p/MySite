function Panel({ className = '', innerClassName = '', children }) {
  return (
    <div className={`panel-shell ${className}`.trim()}>
      <div className={`panel-surface ${innerClassName}`.trim()}>{children}</div>
    </div>
  );
}

export default Panel;

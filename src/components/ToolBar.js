import React from 'react';

import LogoWidget from 'components/LogoWidget';
import LoadSaveWidgetContainer from 'containers/LoadSaveWidget/container';

const widgets = [
  {
    key: 1,
    node: <LogoWidget />,
  },
  {
    key: 2,
    node: <LoadSaveWidgetContainer />,
  },
];

export default function ToolBar() {
  return (
    <div className="toolbar">
      {widgets.map(w => (
        <div key={w.key} className="toolbar-widget">
          {w.node}
        </div>
      ))}
    </div>
  );
}

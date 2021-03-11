import React, { FC, useCallback, useEffect } from "react";
import { WINDOW_NAMES } from "../../utils/enum";
import { useWindow, useDrag } from "overwolf-hooks";

const { DESKTOP } = WINDOW_NAMES;

const DesktopHeader: FC = () => {
  const [desktopWindow] = useWindow(DESKTOP);

  const { onDragStart, onMouseMove, setCurrentWindowID } = useDrag(null);

  const updateDragWindow = useCallback(() => {
    if (desktopWindow?.id) setCurrentWindowID(desktopWindow.id);
  }, [desktopWindow, setCurrentWindowID]);

  useEffect(() => {
    updateDragWindow();
  }, [updateDragWindow]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-8 bg-transparent"
      onMouseDown={(event) => onDragStart(event)}
      onMouseMove={(event) => onMouseMove(event)}
    ></div>
  );
};

export default DesktopHeader;

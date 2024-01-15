import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Counter(props: any) {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible && !isVisible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <CountUp end={isVisible ? 100 : 0} />
    </VisibilitySensor>
  );
}

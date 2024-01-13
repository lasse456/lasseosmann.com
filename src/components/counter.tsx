import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Couter(props: any) {
  return (
    <div className="App">
      <div className="content" />
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }: { isVisible: any }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp end={props.endValue} /> : null}
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
}

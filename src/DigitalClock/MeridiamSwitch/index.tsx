import "./index.css";

type indexProps = {
  hideComponent: boolean
  meridiamValue?: string
}

export enum MeridiamValues {
  am = 'am',
  pm = 'pm'
}

const MeridiamSwitch:React.FC<indexProps> = ({ hideComponent, meridiamValue }) => {
  return (
    <div className={`${ hideComponent ? 'hidden' : 'flex-col' }`}>
      {[MeridiamValues.am, MeridiamValues.pm].map((value, index) => <div key={index} className={`meridiam ${value === meridiamValue ? 'active' : ''}`}>{value.toUpperCase()}</div>)}
    </div>
  );
};

export default MeridiamSwitch;

import "./index.css";

type indexProps = {
  meridiamValue?: string
}

export enum MeridiamValues {
  am = 'am',
  pm = 'pm'
}

const MeridiamSwitch:React.FC<indexProps> = ({meridiamValue}) => {
  return (
    <div className={`${meridiamValue ? 'flex-col' : 'hidden'}`}>
      {[MeridiamValues.am, MeridiamValues.pm].map(value => <div className={`meridiam ${value === meridiamValue ? 'active' : ''}`}>{value.toUpperCase()}</div>)}
    </div>
  );
};

export default MeridiamSwitch;

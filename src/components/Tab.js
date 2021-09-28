import TabInfo from './TabInfo';

const Tab = ({ title, res }) => {
  console.log('Res',res)
  const content = res.map((item) => {
     const { percentage, date, title, unit } = item;
    return <TabInfo key={date} percentage={percentage} date={date} unit={unit} title={title} />
  })
  return (
    <div className="tab">
      <h6 className="px-4 py-2 tab-title">{ title }</h6>
      { content }
    </div>
  )
}

export default Tab

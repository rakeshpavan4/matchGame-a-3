import './index.css'

const TabItem = props => {
  const {tabdetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabdetails

  const activeclass = tabId === isActive ? 'active-tab' : ''

  const onTabChange = () => {
    onChangeTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onTabChange}
        className={`tab-item${activeclass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

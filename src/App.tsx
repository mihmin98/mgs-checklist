import { useState } from 'react';
import './App.scss'
import ProgressionList from './components/ProgressionList'
import { NavTabEnum } from './models/nav-tab';
import CodecFrequneciesList from './components/CodecFrequenciesList/CodecFrequenciesList';

function App() {
  const [activeTab, setActiveTab] = useState(NavTabEnum.PROGRESSION);

  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary' style={{ padding: '16px' }}>
        <h1>Metal Gear Solid Checklist</h1>
        <div style={{ marginLeft: '32px' }}>
          <button className={'btn btn-link btn-nav-link ' + (activeTab === NavTabEnum.PROGRESSION ? 'btn-nav-active-link' : '')}
            onClick={() => setActiveTab(NavTabEnum.PROGRESSION)}>
            Progression
          </button>
          <button className={'btn btn-link btn-nav-link ' + (activeTab === NavTabEnum.ITEM_LIST ? 'btn-nav-active-link' : '')}
            onClick={() => setActiveTab(NavTabEnum.ITEM_LIST)}>
            Item List
          </button>
          <button className={'btn btn-link btn-nav-link ' + (activeTab === NavTabEnum.CODEC_FREQUENCIES ? 'btn-nav-active-link' : '')}
            onClick={() => setActiveTab(NavTabEnum.CODEC_FREQUENCIES)}>
            Codec Frequenices
          </button>
        </div>
      </nav>
      <div className='scrollable-content'>
        {activeTab === NavTabEnum.PROGRESSION &&
          <ProgressionList />}
        {activeTab === NavTabEnum.ITEM_LIST &&
          <div>TODO: Item List</div>}
        {activeTab === NavTabEnum.CODEC_FREQUENCIES &&
          <CodecFrequneciesList />}
      </div>
    </div>
  )
}

export default App

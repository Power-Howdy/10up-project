import React from 'react'
import { nanoid } from 'nanoid';
type Props = {}

const Plugins = (props: Props) => {
  const pluginNames = [
    "Microsoft Azure Storage for WordPress",
    "Autoshare for Twitter",
    "ElasticPress",
    "Simple Podcasting",
    "Convert to Blocks",
    "Insert Special Characters",
    "Block for Apple Maps",
    "Ads.txt Manager",
    "Ad Refresh Control",
    "Safe Redirect Manager",
    "Simple Page Ordering",
    "Simple Local Avatars",
    "Restricted Site Access",
    "Debug Bar ElasticPress",
    "Brightcove Video Connect",
    "Eight Day Week Print Workflow",
    "New Relic Reporting for WordPress",
    "MCE Table Buttons",
    "Simple New Post Emails"
  ];//19 items 7+6+6
  const PluginNameComponent = (props: any) => {
    return <div className='text-black italic hover:text-blue-400 hover:border-l-blue-400 hover:border-l-2 p-3 hover:cursor-pointer'>{props.name}</div>
  }
  return (
    <div className='px-24 py-12 grid grid-cols-3'>
      <div className='col text-3xl'>
        Free & Active WordPress Plugins
      </div>
      <div className='col col-span-2'>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            { pluginNames.slice(0, 7).map(item => <PluginNameComponent key={nanoid()} name={item}/>)}
          </div>
          <div>
            { pluginNames.slice(0, 6).map(item => <PluginNameComponent key={nanoid()} name={item}/>)}
          </div>
          <div>
            { pluginNames.slice(0, 6).map(item => <PluginNameComponent key={nanoid()} name={item}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plugins
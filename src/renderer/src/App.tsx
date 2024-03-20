import { useEffect, useState } from 'react'
import { Progress } from './components/ui/progress'
import { Container } from 'postcss';
import { Image } from '@radix-ui/react-avatar';

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className="flex flex-row items-center justify-center p-16">
      <Progress value={progress} className="w-[60%]" />
    </div>
  )
}

export default App

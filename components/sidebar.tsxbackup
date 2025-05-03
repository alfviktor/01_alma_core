import HistoryContainer from './history-container'
import { HistoryList } from './history-list'

export async function Sidebar() {
  const enableSaveChatHistory = process.env.ENABLE_SAVE_CHAT_HISTORY === 'true'
  if (!enableSaveChatHistory) {
    return null
  }

  return (
    <div className="p-2">
      <HistoryList userId="anonymous" />
    </div>
  )
}

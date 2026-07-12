import React from 'react'
import DashBoardNav from '../../components/DashBoardNav'
import DashboardHero from '../../components/Dashboard/DashboardHero'
import TodayTasks from '../../components/Dashboard/TodayTasks'
import AISuggestions from '../../components/Dashboard/AISuggestions'

const DashBoardHome = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashBoardNav />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <DashboardHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TodayTasks />
          <AISuggestions />
        </div>
      </main>
    </div>
  )
}

export default DashBoardHome

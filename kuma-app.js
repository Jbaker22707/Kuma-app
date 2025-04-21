import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md mb-6">
        <div className="text-2xl font-bold">Kuma</div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="text-purple-600 border-b-2 border-purple-600">Overview</a>
          <a href="#">Calendar</a>
          <a href="#">Posts</a>
          <a href="#">Clients</a>
          <a href="#">Assistant</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" alt="User avatar" />
          <span className="text-sm font-medium">Max Mitchell</span>
        </div>
      </nav>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
            <p className="text-sm mb-4">Start creating your next post with Kuma AI.</p>
            <Button>Generate Post</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Upcoming Posts</h2>
            <p className="text-sm">You have 3 posts scheduled this week.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Martin Suggests</h2>
            <p className="text-sm italic">"Try posting a trending audio with behind-the-scenes footage today."</p>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Weekly Performance</h2>
            <div className="h-32 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              [Chart Placeholder]
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Client Feedback</h2>
            <p className="text-sm">All recent posts have been approved!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const initialSchedule = [
  { id: '1', title: 'Instagram Post for Client A' },
  { id: '2', title: 'TikTok Video Draft' },
  { id: '3', title: 'LinkedIn Poll Campaign' }
];

function SortableItem({ id, title }: { id: string; title: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-xl shadow-md mb-3 cursor-pointer"
    >
      {title}
    </div>
  );
}

const Dashboard = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = schedule.findIndex((item) => item.id === active.id);
      const newIndex = schedule.findIndex((item) => item.id === over.id);
      setSchedule(arrayMove(schedule, oldIndex, newIndex));
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">Kuma Dashboard</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={schedule} strategy={verticalListSortingStrategy}>
          {schedule.map((item) => (
            <SortableItem key={item.id} id={item.id} title={item.title} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Dashboard;

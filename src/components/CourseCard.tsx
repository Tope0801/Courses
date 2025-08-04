import React from 'react'
import { MapPin, Tag, GraduationCap } from 'lucide-react'
import { Course } from '../lib/supabase'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getBranchColor = (branch: string) => {
    switch (branch.toLowerCase()) {
      case 'pasig':
        return 'bg-purple-100 text-purple-800'
      case 'pasay':
        return 'bg-teal-100 text-teal-800'
      case 'jalajala':
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgramColor = (program: string) => {
    switch (program.toLowerCase()) {
      case '2-year program':
        return 'bg-purple-100 text-purple-800'
      case 'senior high':
        return 'bg-orange-100 text-orange-800'
      case 'short courses':
        return 'bg-cyan-100 text-cyan-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* Course Image */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 overflow-hidden flex-shrink-0">
        {course.image_url ? (
          <img
            src={course.image_url}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Tag className="h-16 w-16 text-white opacity-50" />
          </div>
        )}
      </div>

      {/* Course Content - Flexible area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 break-words hyphens-auto leading-tight">
          {course.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getProgramColor(course.program)}`}>
            <GraduationCap className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate max-w-[120px]">{course.program}</span>
          </span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBranchColor(course.branch)}`}>
            <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate max-w-[80px]">{course.branch}</span>
          </span>
        </div>

        {/* Technology - This will expand to fill available space */}
        <div className="mb-6 flex-grow">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 w-full max-w-full">
            <Tag className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{course.technology}</span>
          </span>
        </div>

        {/* Price and CTA - Fixed at bottom */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center justify-between">
            {course.price > 0 && (
              <div className="text-2xl font-bold text-gray-900">
                {formatPrice(course.price)}
              </div>
            )}
            <div className={course.price > 0 ? "ml-4" : ""}>
              {course.link ? (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  View Details
                </a>
              ) : (
                <button 
                  disabled
                  className="inline-block px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-md cursor-not-allowed"
                >
                  No Link
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
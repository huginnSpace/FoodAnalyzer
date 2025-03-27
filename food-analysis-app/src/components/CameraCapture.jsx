import { useEffect, useRef, useState } from 'react'

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null)
  const [error, setError] = useState(null)
  const [isCameraActive, setIsCameraActive] = useState(false)

  useEffect(() => {
    let stream = null

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        })
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
      } catch (err) {
        setError('Could not access camera. Please check permissions.')
        console.error('Camera error:', err)
      }
    }

    startCamera()

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  const captureImage = () => {
    const canvas = document.createElement('canvas')
    canvas.width = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0)
    onCapture(canvas.toDataURL('image/jpeg'))
  }

  return (
    <div className="relative">
      {error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={captureImage}
              disabled={!isCameraActive}
              className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition"
            >
              <span className="sr-only">Capture</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
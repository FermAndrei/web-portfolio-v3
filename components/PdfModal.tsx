"use client";

type PdfModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
};

export default function PdfModal({ isOpen, onClose, pdfUrl }: PdfModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 w-[90%] max-w-4xl h-[80%] bg-white rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-3 border-b">
          <h2 className="font-semibold">Ferm Andrei V. Trillana - Resume</h2>
          <button
            onClick={onClose}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>

        <iframe src={pdfUrl} className="w-full h-full" />
      </div>
    </div>
  );
}

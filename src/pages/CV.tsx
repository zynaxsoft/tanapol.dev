import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import TerminalBlock from '../components/terminal/TerminalBlock';
import { Download, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import BentoCard from '../components/ui/BentoCard';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CV: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.2);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <BentoCard className="h-full flex flex-col">
      <TerminalBlock command="open ./cv.pdf" isVisible={true}>
        <div className="space-y-4">
          <p className="text-subtext">Opening PDF viewer...</p>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-overlay text-text rounded transition-colors"
            >
              <Download size={16} /> Download PDF
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-2 bg-surface hover:bg-overlay text-text rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-subtext text-sm">
                {pageNumber} / {numPages || '?'}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-2 bg-surface hover:bg-overlay text-text rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                disabled={scale <= 0.5}
                className="p-2 bg-surface hover:bg-overlay text-text rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-subtext text-sm">{Math.round(scale * 100)}%</span>
              <button
                onClick={zoomIn}
                disabled={scale >= 2.5}
                className="p-2 bg-surface hover:bg-overlay text-text rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ZoomIn size={16} />
              </button>
            </div>
          </div>

          <div className="w-full h-[800px] border-2 border-surface rounded bg-surface/10 overflow-auto flex justify-center">
            <Document
              file="/cv.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="flex items-center justify-center h-full text-subtext">Loading PDF...</div>}
              error={
                <div className="flex flex-col items-center justify-center h-full text-subtext">
                  <p>Failed to load PDF.</p>
                  <a href="/cv.pdf" className="text-primary hover:underline">Download it instead.</a>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
        </div>
      </TerminalBlock>
    </BentoCard>
  );
};

export default CV;

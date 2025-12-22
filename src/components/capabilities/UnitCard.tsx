import React from 'react';
import { ArrowRight } from "lucide-react";
import { MachineUnit } from "@/data/capabilities";

interface UnitCardProps {
    unit: MachineUnit;
    index: number;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit, index }) => {
    return (
        <article className="bg-white rounded-[48px] border border-border overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
            {/* Visual Header */}
            <div className="h-[400px] grid grid-cols-2 gap-1 relative overflow-hidden bg-spacecadet">
                {unit.images.map((img, i) => (
                    <div key={i} className="relative overflow-hidden group/image h-full w-full">
                        <div className="absolute inset-0 bg-spacecadet/10 group-hover/image:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src={img}
                            alt={`${unit.alt} - View ${i + 1}`}
                            className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                            loading="lazy"
                        />
                    </div>
                ))}

                <div className="absolute top-8 left-8 z-20">
                    <div aria-label={`Unit Number ${index + 1}`} className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center text-lg font-black shadow-lg">
                        {index + 1}
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-10 md:p-16 relative bg-white flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-spacecadet mb-10 tracking-tight">
                    {unit.title}
                </h3>
                <div className={`grid grid-cols-1 md:${unit.categories.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-10`}>
                    {unit.categories.map((cat, cIdx) => (
                        <div key={cIdx} className="flex flex-col">
                            <h4 className="font-bold text-spacecadet text-sm uppercase tracking-widest mb-6 border-l-2 border-primary pl-4">
                                {cat.name}
                            </h4>
                            <ul className="space-y-4">
                                {cat.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start text-sm text-slate-text opacity-90 leading-relaxed font-medium">
                                        <ArrowRight className="w-4 h-4 text-primary mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default UnitCard;

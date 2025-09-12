"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, BookOpen, Wrench, MapPin, Check, ChevronDown } from 'lucide-react';

// --- Data for Dropdowns ---
const degrees = [ "Bachelor of Technology (B.Tech) - Computer Science", "Bachelor of Technology (B.Tech) - Information Technology", "Bachelor of Technology (B.Tech) - Electronics & Communication", "Bachelor of Technology (B.Tech) - Mechanical Engineering", "Bachelor of Technology (B.Tech) - Civil Engineering", "Bachelor of Commerce (B.Com)", "Bachelor of Science (B.Sc)", "Bachelor of Arts (B.A)", "Bachelor of Business Administration (BBA)", "Bachelor of Computer Applications (BCA)", "Master of Technology (M.Tech)", "Master of Business Administration (MBA)", "Master of Commerce (M.Com)", "Master of Science (M.Sc)", "Master of Computer Applications (MCA)", "Doctor of Philosophy (PhD)", "Diploma", "Other"];
const domains = ["Information Technology & Software Development", "Finance, Banking & Insurance", "Marketing & Sales", "Human Resources (HR)", "Operations & Supply Chain", "Healthcare & Pharmaceuticals", "Government & Public Policy", "Media, Entertainment & Journalism", "Core Engineering (Mechanical, Civil, Electrical)", "Education & Ed-Tech", "Data Science & Analytics", "Other"];

// --- Reusable Input Component with Perfected Floating Label ---
const FloatingLabelInput = ({ id, label, type = "text", value, onChange, error, children }) => {
    const hasValue = value && value !== '';
    const isError = error && !hasValue;
    const isSelect = type === 'select';
    
    // For selects, the label should float if a value is chosen.
    const isFloating = isSelect ? hasValue : value !== undefined && value !== '';

    return (
        <div className="relative">
            <label 
                htmlFor={id} 
                className={`absolute left-0 transition-all duration-300 pointer-events-none ${isError ? 'text-red-500' : 'text-slate-500'} 
                    ${isFloating ? 'top-0 text-xs text-blue-800' : 'top-1/2 -translate-y-1/2'}`}
            >
                {label} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
                {isSelect ? (
                    <>
                        <select 
                            id={id} 
                            name={id} 
                            value={value || ''}
                            onChange={onChange}
                            className={`w-full appearance-none pl-3 pr-8 py-2 bg-transparent border-b-2 outline-none transition-colors ${isError ? 'border-red-500' : 'border-slate-200 focus:border-orange-500'}`}
                        >
                            {children}
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                    </>
                ) : (
                    <input 
                        type={type} id={id} name={id} value={value || ''} onChange={onChange}
                        className={`w-full px-3 py-2 bg-transparent border-b-2 outline-none transition-colors ${isError ? 'border-red-500' : 'border-slate-200 focus:border-orange-500'}`}
                    />
                )}
            </div>
        </div>
    );
};

// --- Form Step Components ---
const Step1_Personal = ({ data, onChange, errors }) => (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <FloatingLabelInput id="fullName" label="Full Name" value={data.fullName} onChange={onChange} error={errors.fullName} />
            <FloatingLabelInput id="age" label="Age" type="number" value={data.age} onChange={onChange} error={errors.age} />
            <FloatingLabelInput id="gender" label="Gender" type="select" value={data.gender} onChange={onChange} error={errors.gender}>
                <option value=""></option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
            </FloatingLabelInput>
            <FloatingLabelInput id="location" label="City, State" value={data.location} onChange={onChange} error={errors.location} />
            <FloatingLabelInput id="category" label="Social Category" type="select" value={data.category} onChange={onChange} error={errors.category}>
                <option value=""></option><option value="General">General</option><option value="OBC">OBC</option><option value="SC">SC</option><option value="ST">ST</option>
            </FloatingLabelInput>
        </div>
    </motion.div>
);

const Step2_Education = ({ data, onChange, errors }) => (
     <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Education Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <FloatingLabelInput id="degree" label="Degree / Discipline" type="select" value={data.degree} onChange={onChange} error={errors.degree}>
                <option value=""></option>{degrees.map(d => <option key={d} value={d}>{d}</option>)}
            </FloatingLabelInput>
            <FloatingLabelInput id="college" label="College / Institute Name" value={data.college} onChange={onChange} error={errors.college} />
            <FloatingLabelInput id="gradYear" label="Graduation Year" type="number" value={data.gradYear} onChange={onChange} error={errors.gradYear} />
            <FloatingLabelInput id="cgpa" label="CGPA / Percentage" value={data.cgpa} onChange={onChange} error={errors.cgpa} />
        </div>
    </motion.div>
);

const Step3_Skills = ({ data, onChange, errors }) => {
    const numInternships = data.numInternships || 0;
    
    return (
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Skills & Experience</h2>
            <div className="space-y-4">
                <FloatingLabelInput id="skills" label="Technical Skills (comma-separated)" value={data.skills} onChange={onChange} error={errors.skills} />
                <FloatingLabelInput id="pastInternships" label="Past Internships" type="select" value={data.pastInternships} onChange={onChange} error={errors.pastInternships}>
                    <option value="">Any past internships?</option><option value="Yes">Yes</option><option value="No">No</option>
                </FloatingLabelInput>
                <AnimatePresence>
                    {data.pastInternships === 'Yes' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                            <FloatingLabelInput id="numInternships" label="How many?" type="select" value={data.numInternships} onChange={onChange} error={errors.numInternships}>
                                <option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
                            </FloatingLabelInput>
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div layout className="space-y-6">
                    <AnimatePresence>
                        {Array.from({ length: numInternships }).map((_, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4 border border-slate-200 rounded-lg space-y-4"
                            >
                                <h3 className="font-semibold text-blue-800">Internship #{i + 1}</h3>
                                <FloatingLabelInput id={`companyName${i}`} label="Company Name" value={data[`companyName${i}`]} onChange={onChange} error={errors[`companyName${i}`]} />
                                <FloatingLabelInput id={`internRole${i}`} label="Role / Position" value={data[`internRole${i}`]} onChange={onChange} error={errors[`internRole${i}`]} />
                                <FloatingLabelInput id={`internDuration${i}`} label="Duration (in months)" type="number" value={data[`internDuration${i}`]} onChange={onChange} error={errors[`internDuration${i}`]} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Step4_Preferences = ({ data, onChange, errors }) => (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Internship Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <FloatingLabelInput id="domain" label="Preferred Domain" type="select" value={data.domain} onChange={onChange} error={errors.domain}>
                <option value=""></option>{domains.map(d => <option key={d} value={d}>{d}</option>)}
            </FloatingLabelInput>
            <FloatingLabelInput id="prefLocation" label="Preferred Location" value={data.prefLocation} onChange={onChange} error={errors.prefLocation} />
            <FloatingLabelInput id="duration" label="Preferred Duration" type="select" value={data.duration} onChange={onChange} error={errors.duration}>
                <option value=""></option><option value="1 Month">1 Month</option><option value="3 Months">3 Months</option><option value="6 Months">6 Months</option>
            </FloatingLabelInput>
            <FloatingLabelInput id="workMode" label="Work Mode" type="select" value={data.workMode} onChange={onChange} error={errors.workMode}>
                <option value=""></option><option value="Remote">Remote</option><option value="On-site">On-site</option><option value="Hybrid">Hybrid</option>
            </FloatingLabelInput>
        </div>
    </motion.div>
);

// --- Main Page Component ---
export default function ProfilePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const steps = [
        { number: 1, icon: User, title: "Personal", fields: ['fullName', 'age', 'gender', 'location', 'category'] },
        { number: 2, icon: BookOpen, title: "Education", fields: ['degree', 'college', 'gradYear', 'cgpa'] },
        { number: 3, icon: Wrench, title: "Skills", fields: ['skills', 'pastInternships'] },
        { number: 4, icon: MapPin, title: "Preferences", fields: ['domain', 'prefLocation', 'duration', 'workMode'] },
    ];
    
    // Clear internship details if user changes from 'Yes' to 'No'
    useEffect(() => {
        if (formData.pastInternships === 'No') {
            const newFormData = { ...formData };
            delete newFormData.numInternships;
            for (let i = 0; i < 3; i++) {
                delete newFormData[`companyName${i}`];
                delete newFormData[`internRole${i}`];
                delete newFormData[`internDuration${i}`];
            }
            setFormData(newFormData);
        }
    }, [formData.pastInternships]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) { setErrors(prev => ({ ...prev, [id]: false })); }
    };

    const validateStep = () => {
        const currentFields = steps[currentStep - 1].fields;
        const newErrors = {};
        let isValid = true;
        currentFields.forEach(field => {
            if (!formData[field]) { newErrors[field] = true; isValid = false; }
        });
        if (formData.pastInternships === 'Yes') {
            if (!formData.numInternships) { newErrors.numInternships = true; isValid = false; }
            for (let i = 0; i < (formData.numInternships || 0); i++) {
                if (!formData[`companyName${i}`]) { newErrors[`companyName${i}`] = true; isValid = false; }
                if (!formData[`internRole${i}`]) { newErrors[`internRole${i}`] = true; isValid = false; }
                if (!formData[`internDuration${i}`]) { newErrors[`internDuration${i}`] = true; isValid = false; }
            }
        }
        setErrors(newErrors);
        return isValid;
    };

    const nextStep = () => { if (validateStep()) { setCurrentStep(prev => Math.min(prev + 1, steps.length)); } };
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
    const handleSubmit = (e) => { e.preventDefault(); if (validateStep()) { console.log("Form Submitted:", formData); alert("Profile created successfully!"); } };

    return (
        <main className="bg-gradient-to-b from-blue-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-3xl mx-auto">
                <div className="mb-8">
                    <div className="relative h-2 bg-slate-200 rounded-full">
                        <motion.div className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" initial={{ width: '0%' }} animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} transition={{ duration: 0.5, ease: "easeInOut" }}/>
                    </div>
                    <div className="flex justify-between mt-2">
                        {steps.map(step => (
                            <motion.div key={step.number} className={`flex items-center gap-2 text-sm transition-colors ${currentStep >= step.number ? 'text-orange-600 font-semibold' : 'text-slate-400'}`} animate={{ scale: currentStep === step.number ? 1.1 : 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <step.icon size={16} />{step.title}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && <Step1_Personal key={1} data={formData} onChange={handleInputChange} errors={errors} />}
                        {currentStep === 2 && <Step2_Education key={2} data={formData} onChange={handleInputChange} errors={errors} />}
                        {currentStep === 3 && <Step3_Skills key={3} data={formData} onChange={handleInputChange} errors={errors} />}
                        {currentStep === 4 && <Step4_Preferences key={4} data={formData} onChange={handleInputChange} errors={errors} />}
                    </AnimatePresence>
                    <div className="mt-10 flex justify-between items-center">
                        <motion.button onClick={prevStep} disabled={currentStep === 1} className="px-6 py-2 rounded-md font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition disabled:opacity-50 disabled:cursor-not-allowed" whileTap={{ scale: 0.95 }}>Back</motion.button>
                        <AnimatePresence mode="wait">
                            {currentStep < steps.length ? (
                                <motion.button key="next" onClick={nextStep} className="px-6 py-2 rounded-md font-semibold text-white bg-blue-900 hover:bg-blue-800 transition" whileTap={{ scale: 0.95 }} animate={Object.keys(errors).length > 0 ? { x: [0, -5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>Next</motion.button>
                            ) : (
                                <motion.button key="submit" onClick={handleSubmit} className="px-6 py-2 rounded-md font-semibold text-white bg-orange-500 hover:bg-orange-600 transition flex items-center gap-2" whileTap={{ scale: 0.95 }} animate={Object.keys(errors).length > 0 ? { x: [0, -5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.4 }}>Submit Profile <Check size={18} /></motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}


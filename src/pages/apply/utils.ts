export const FORM_DATA_TEMPLATE = {
  name: "",
  emailId: "",
  whatsappId: "",
  teams: [
    {
      teamName: "",
      exp: "",
      detailedExperience: "",
      enabled: false,
    },
  ],
  qNa: [
    {
      question: "Why do you want to join siNUsoid?",
      answer: "",
    },
  ],
};

export const TEAM_TEMPLATE = {
  teamName: "",
  exp: "",
  detailedExperience: "",
};

export const TEAM_ARRAY = [
  { teamId: "capture", label: "Capture" },
  { teamId: "content", label: "Content" },
  { teamId: "creative", label: "Creative" },
  { teamId: "design", label: "Design" },
  { teamId: "eventCuration", label: "Event Curation" },
  { teamId: "marketing", label: "Marketing" },
  { teamId: "operation", label: "Operations" },
  { teamId: "publicRelation", label: "Public Relations" },
  { teamId: "sponsorship", label: "Sponsorship" },
  { teamId: "tech", label: "Tech" },
];

// <div>
//   <Controller
//     control={control}
//     name="teams"
//     render={({ field }) => (
//       <div>
//         {formData?.teams?.map((_, index) => (
//           <div key={index}>
//             {/* <Input
//                           type="text"
//                           className="text-black"
//                           placeholder="Team Name"
//                           {...register(`teams.${index}.teamName`)}
//                         /> */}
//             {true && (
//               <>
//                 <Label htmlFor="teamName">Select Team</Label>
//                 <Select
//                   onValueChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       teams: {
//                         ...prev.teams,
//                         [index]: {
//                           ...prev.teams[index],
//                           teamName: e,
//                           enabled: true,
//                         },
//                       },
//                     }))
//                   }
//                   value={formData?.teams?.[index]?.teamName}
//                 >
//                   <SelectTrigger className="text-black">
//                     <SelectValue
//                       style={{ color: "black !imporatant" }}
//                       placeholder="choose your favourite team"
//                     />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectLabel>select a team</SelectLabel>
//                       {TEAM_ARRAY.map((team: any, idx: any) => (
//                         <SelectItem key={idx} value={team?.teamId}>
//                           {team?.label}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//                 {formData?.teams?.[index]?.enabled && (
//                   <div>
//                     <Label htmlFor="expereince">Experience</Label>
//                     <Select
//                       onValueChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           teams: {
//                             ...prev?.teams,
//                             [index]: {
//                               ...prev?.teams[index],
//                               exp: e,
//                             },
//                           },
//                         }))
//                       }
//                       value={formData?.teams?.[index]?.exp}
//                     >
//                       <SelectTrigger className="text-black">
//                         <SelectValue
//                           placeholder={`how much experience do you have in ${formData?.teams?.[index]?.teamName}?`}
//                         />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectGroup>
//                           <SelectLabel>select a team</SelectLabel>

//                           <SelectItem value={"Entry"}>Entry</SelectItem>
//                           <SelectItem value={"Beginner"}>Beginner</SelectItem>
//                           <SelectItem value={"Intermediate"}>
//                             Intermediate
//                           </SelectItem>
//                           <SelectItem value={"Advanced"}>Advanced</SelectItem>
//                         </SelectGroup>
//                       </SelectContent>
//                     </Select>
//                     <Label htmlFor="detailedExperience">
//                       What experience do you have in{" "}
//                       {formData?.teams?.[index]?.teamName}?
//                     </Label>
//                     <Textarea
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           teams: {
//                             ...prev.teams,
//                             [index]: {
//                               ...prev.teams[index],
//                               detailedExperience: e.target.value,
//                             },
//                           },
//                         }))
//                       }
//                       value={formData?.teams?.[index]?.detailedExperience}
//                       className="text-black"
//                       id="detailedExperience"
//                       placeholder="enter your detailed experience"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     )}
//   />
// </div>;

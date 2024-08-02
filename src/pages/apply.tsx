import GridPattern from "@/components/magicui/animated-grid-pattern";
import SinusoidLogo from "@/components/SiusoidLogo/SinuLogoComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Apply: React.FC = () => {
  const FORM_DATA_TEMPLATE = {
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

  const TEAM_TEMPLATE = {
    teamName: "",
    exp: "",
    detailedExperience: "",
  };

  const TEAM_ARRAY = [
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
  const [formData, setFormData] = useState(FORM_DATA_TEMPLATE);
  const [teamCount, setTeamCount] = useState(1);
  const [teamArray, setTeamArray] = useState(TEAM_ARRAY);

  function addTeam() {
    setFormData((prev) => ({
      ...prev,
      teams: [
        ...prev.teams,
        {
          teamName: "",
          exp: "",
          detailedExperience: "",
          enabled: false,
        },
      ],
    }));
    setTeamCount((prev) => prev + 1);
  }

  function formFilled() {
    return (
      formData?.name &&
      formData?.emailId &&
      formData?.whatsappId &&
      formData?.qNa?.[0]?.answer &&
      formData?.teams?.some(
        (team) =>
          team?.teamName &&
          team?.exp &&
          team?.detailedExperience &&
          team?.enabled
      )
    );
  }

  const router = useRouter();

  const onSubmit = async () => {
    try {
      const res = await axios.post("https://api.sinusoid.in/submit", formData);
      if (res.data.success === "2000") {
        router.push("/success");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form");
    }
  };
  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center overflow-hidden bg-background bg-black text-white p-20 md:shadow-xl sm:text-xl ">
      <SinusoidLogo className="absolute top-0 justify-center p-4  shadow-md z-50 h-40 w-40" />
      <div className="flex flex-col lg:w-[40vw] md:h-[70vh] md:w-[80vw] sm:h-[70vh] sm:w-[80vw] xl:text-5xl gap-3 justify-center z-10 overflow-y-scroll my-6 px-6">
        <div>
          {/* <label>Name</label>
            <input className="text-black" {...register("name")} /> */}
          <Label style={{ fontSize: "1.25rem" }} htmlFor="name">
            Name
          </Label>
          <Input
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={formData?.name}
            className="text-black"
            type="name"
            id="name"
            placeholder="enter your name"
          />
        </div>
        <div>
          <Label style={{ fontSize: "1.25rem" }} htmlFor="emaildId">
            Email ID
          </Label>
          <Input
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, emailId: e.target.value }))
            }
            value={formData?.emailId}
            className="text-black"
            type="email"
            id="emailId"
            placeholder="enter your email id"
          />
        </div>
        <div>
          <Label style={{ fontSize: "1.25rem" }} htmlFor="name">
            WhatsApp Number
          </Label>
          <Input
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, whatsappId: e.target.value }))
            }
            value={formData?.whatsappId}
            className="text-black"
            type="whatsappId"
            id="whatsappId"
            placeholder="enter your whatsapp number"
          />
        </div>
        <div>
          {formData?.teams?.map((team, index) => (
            <div key={index}>
              <Label style={{ fontSize: "1.25rem" }} htmlFor="teamName">
                Select Team
              </Label>
              <Select
                required
                onValueChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    teams: [
                      ...prev.teams.slice(0, index),
                      {
                        ...prev.teams[index],
                        teamName: e,
                        enabled: true,
                      },
                      ...prev.teams.slice(index + 1),
                    ],
                  }));
                  // setTeamArray((prev) =>
                  //   prev.filter((team) => team.teamId !== e)
                  // );
                }}
                value={formData?.teams?.[index]?.teamName}
              >
                <SelectTrigger className="text-black">
                  <SelectValue
                    style={{ color: "black !imporatant" }}
                    placeholder="choose your favourite team"
                  >
                    {TEAM_ARRAY.filter(
                      (item) =>
                        item?.teamId === formData?.teams?.[index]?.teamName
                    ).map((team) => team?.label)}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a team</SelectLabel>
                    {teamArray.map((team: any, idx: any) => (
                      <SelectItem key={idx} value={team?.teamId}>
                        {team?.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formData?.teams?.[index]?.enabled && (
                <div>
                  <Label style={{ fontSize: "1.25rem" }} htmlFor="expereince">
                    Experience
                  </Label>
                  <Select
                    required
                    onValueChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        teams: [
                          ...prev.teams.slice(0, index),
                          {
                            ...prev.teams[index],
                            exp: e,
                          },
                          ...prev.teams.slice(index + 1),
                        ],
                      }))
                    }
                    value={formData?.teams?.[index]?.exp}
                  >
                    <SelectTrigger className="text-black">
                      <SelectValue
                        style={{ color: "black !imporatant" }}
                        placeholder={`how much experience do you have with ${formData?.teams?.[index]?.teamName}`}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{`select experience`}</SelectLabel>
                        <SelectItem value="entry">Entry</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Label
                    style={{ fontSize: "1.25rem" }}
                    htmlFor="detailedExperience"
                  >
                    Detailed Experience
                  </Label>
                  <Textarea
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        teams: [
                          ...prev.teams.slice(0, index),
                          {
                            ...prev.teams[index],
                            detailedExperience: e.target.value,
                          },
                          ...prev.teams.slice(index + 1),
                        ],
                      }))
                    }
                    value={formData?.teams?.[index]?.detailedExperience}
                    className="text-black"
                    placeholder="enter your detailed experience"
                  />
                </div>
              )}
            </div>
          ))}
          {teamCount < 4 && (
            <Button className=" my-2" variant={"secondary"} onClick={addTeam}>
              Apply for another team
            </Button>
          )}
        </div>
        <div>
          <Label style={{ fontSize: "1.25rem" }} htmlFor="summary">
            Why do you want to join?
          </Label>
          <Textarea
            required
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                qNa: [{ ...prev.qNa[0], answer: e.target.value }],
              }))
            }
            value={formData?.qNa?.[0]?.answer}
            className="text-black"
            placeholder="enter your answer"
          />
        </div>
        <Button
          disabled={!formFilled()}
          variant={"default"}
          className="bg-white text-black dark:bg-black dark:text-white"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
      <GridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default Apply;

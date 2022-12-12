import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  closeForm: () => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
};

function ActivityList({
  activities,
  selectActivity,
  closeForm,
  deleteActivity,
  submitting,
}: Props) {


  const [target, setTarget] = useState("");
  let handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };


  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => {
                    selectActivity(activity.id);
                    closeForm();
                  }}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  loading={submitting && target ===activity.id}
                  onClick={(e) => {
                    handleActivityDelete(e, activity.id);
                    closeForm();
                  }}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}

export default ActivityList;

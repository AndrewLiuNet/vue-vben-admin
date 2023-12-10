import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '签到类型',
    dataIndex: 'checkInType',
    width: 200,
  },
  {
    title: '签到地点',
    dataIndex: 'checkInLocation',
    width: 180,
  },
  {
    title: '开始时间',
    dataIndex: 'checkInStartTime',
    width: 180,
  },
  {
    title: '结束时间',
    dataIndex: 'checkInEndTime',
    width: 180,
  },
  {
    title: '签到状态',
    dataIndex: 'checkInStatus',
    width: 180,
  },

  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   width: 120,
  //   customRender: ({ record }) => {
  //     if (!Reflect.has(record, 'pendingStatus')) {
  //       record.pendingStatus = false;
  //     }
  //     return h(Switch, {
  //       checked: record.status === '1',
  //       checkedChildren: '停用',
  //       unCheckedChildren: '启用',
  //       loading: record.pendingStatus,
  //       onChange(checked: boolean) {
  //         record.pendingStatus = true;
  //         const newStatus = checked ? '1' : '0';
  //         const { createMessage } = useMessage();
  //         setRoleStatus(record.id, newStatus)
  //           .then(() => {
  //             record.status = newStatus;
  //             createMessage.success(`已成功修改角色状态`);
  //           })
  //           .catch(() => {
  //             createMessage.error('修改角色状态失败');
  //           })
  //           .finally(() => {
  //             record.pendingStatus = false;
  //           });
  //       },
  //     });
  //   },
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   width: 180,
  // },
  // {
  //   title: '备注',
  //   dataIndex: 'remark',
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'checkInStartTime',
    label: '开始时间',
    required: true,
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'checkInEndTime',
    label: '结束时间',
    required: true,
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'initiatorId',
    label: '发起人',
    required: true,
    component: 'Input',
    colProps: { span: 6 },
  },
  // {
  //   field: 'createTime',
  //   label: '创建时间',
  //   required: true,
  //   component: 'Input',
  //   colProps: { span: 6 },
  // },

  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'Select',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '1' },
  //       { label: '停用', value: '0' },
  //     ],
  //   },
  // },
];

export const formSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'roleValue',
    label: '角色值',
    required: true,
    component: 'Input',
    ifShow: false,
  },
  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '1' },
  //       { label: '停用', value: '0' },
  //     ],
  //   },
  // },
];

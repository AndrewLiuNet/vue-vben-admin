<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getPageInfo } from '@/api/clockingIn';

  import { useDrawer } from '@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './config';

  const [registerDrawer, { openDrawer }] = useDrawer();
  const [registerTable, { reload }] = useTable({
    title: '',
    api: getPageInfo,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      actionColOptions: {
        span: 6,
      },
      alwaysShowLines: 1,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: true,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
      fixed: undefined,
    },
  });

  // function handleCreate() {
  //   openDrawer(true, {
  //     isUpdate: false,
  //   });
  // }

  function handleEdit(record) {
    openDrawer(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record) {
    console.log(record);
  }

  function handleSuccess() {
    reload();
  }
</script>
